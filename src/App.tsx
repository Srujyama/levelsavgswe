import { useState, useMemo, useCallback } from "react";
import {
  salaryData,
  allTiers,
  allSeniorityLevels,
  tierColors,
  formatSalary,
  getMedianForSeniority,
  type CompanyData,
  type CompanyTier,
  type SeniorityLevel,
} from "./data/salaryData";
import "./App.css";

type SortField =
  | "company"
  | "tier"
  | "medianTotal"
  | "entryLevel"
  | "senior"
  | "staff"
  | "range";
type SortDirection = "asc" | "desc";
type ViewMode = "table" | "chart" | "compare" | "levels";

function App() {
  const [selectedTiers, setSelectedTiers] = useState<CompanyTier[]>([]);
  const [selectedSeniority, setSelectedSeniority] =
    useState<SeniorityLevel | "all">("all");
  const [sortField, setSortField] = useState<SortField>("medianTotal");
  const [sortDir, setSortDir] = useState<SortDirection>("desc");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("table");
  const [expandedCompany, setExpandedCompany] = useState<string | null>(null);
  const [compareList, setCompareList] = useState<string[]>([]);
  const [showPrivateOnly, setShowPrivateOnly] = useState<boolean | null>(null);

  const toggleTier = useCallback((tier: CompanyTier) => {
    setSelectedTiers((prev) =>
      prev.includes(tier) ? prev.filter((t) => t !== tier) : [...prev, tier]
    );
  }, []);

  const handleSort = useCallback(
    (field: SortField) => {
      if (sortField === field) {
        setSortDir((d) => (d === "asc" ? "desc" : "asc"));
      } else {
        setSortField(field);
        setSortDir("desc");
      }
    },
    [sortField]
  );

  const toggleCompare = useCallback((company: string) => {
    setCompareList((prev) =>
      prev.includes(company)
        ? prev.filter((c) => c !== company)
        : prev.length < 6
        ? [...prev, company]
        : prev
    );
  }, []);

  const filteredData = useMemo(() => {
    let data = [...salaryData];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      data = data.filter(
        (c) =>
          c.company.toLowerCase().includes(q) ||
          c.tier.toLowerCase().includes(q) ||
          c.tiers.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (selectedTiers.length > 0) {
      data = data.filter((c) =>
        c.tiers.some((t) => selectedTiers.includes(t))
      );
    }

    if (showPrivateOnly === true) {
      data = data.filter((c) => c.isPrivate);
    } else if (showPrivateOnly === false) {
      data = data.filter((c) => !c.isPrivate);
    }

    const getSortValue = (c: CompanyData): number | string => {
      switch (sortField) {
        case "company":
          return c.company.toLowerCase();
        case "tier":
          return c.tier;
        case "medianTotal":
          if (selectedSeniority !== "all") {
            return getMedianForSeniority(c, selectedSeniority) ?? 0;
          }
          return c.medianTotal;
        case "entryLevel":
          return getMedianForSeniority(c, "Entry Level") ?? 0;
        case "senior":
          return getMedianForSeniority(c, "Senior") ?? 0;
        case "staff":
          return getMedianForSeniority(c, "Staff") ?? 0;
        default:
          return c.medianTotal;
      }
    };

    data.sort((a, b) => {
      const va = getSortValue(a);
      const vb = getSortValue(b);
      const cmp = typeof va === "string" ? va.localeCompare(vb as string) : (va as number) - (vb as number);
      return sortDir === "asc" ? cmp : -cmp;
    });

    return data;
  }, [searchQuery, selectedTiers, showPrivateOnly, sortField, sortDir, selectedSeniority]);

  const compareData = useMemo(() => {
    return salaryData.filter((c) => compareList.includes(c.company));
  }, [compareList]);

  const maxMedian = useMemo(() => {
    return Math.max(...filteredData.map((c) => c.medianTotal));
  }, [filteredData]);

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return <span className="sort-icon dim">&#8693;</span>;
    return (
      <span className="sort-icon active">
        {sortDir === "asc" ? "&#9650;" : "&#9660;"}
      </span>
    );
  };

  const renderBar = (value: number, max: number, color: string) => {
    const pct = (value / max) * 100;
    return (
      <div className="bar-container">
        <div
          className="bar-fill"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
        <span className="bar-label">{formatSalary(value)}</span>
      </div>
    );
  };

  const renderTierBadge = (tier: CompanyTier) => (
    <span
      className="tier-badge"
      style={{
        backgroundColor: tierColors[tier] + "20",
        color: tierColors[tier],
        borderColor: tierColors[tier] + "40",
      }}
    >
      {tier}
    </span>
  );

  const renderTableView = () => (
    <div className="table-wrapper">
      <table className="salary-table">
        <thead>
          <tr>
            <th className="sticky-col compare-col">
              <span className="th-label">Cmp</span>
            </th>
            <th className="sticky-col name-col" onClick={() => handleSort("company")}>
              <span className="th-label">
                Company <SortIcon field="company" />
              </span>
            </th>
            <th onClick={() => handleSort("tier")}>
              <span className="th-label">
                Tier <SortIcon field="tier" />
              </span>
            </th>
            <th onClick={() => handleSort("medianTotal")}>
              <span className="th-label">
                {selectedSeniority !== "all"
                  ? `${selectedSeniority} TC`
                  : "Median TC"}
                <SortIcon field="medianTotal" />
              </span>
            </th>
            <th onClick={() => handleSort("entryLevel")}>
              <span className="th-label">
                Entry Level <SortIcon field="entryLevel" />
              </span>
            </th>
            <th onClick={() => handleSort("senior")}>
              <span className="th-label">
                Senior <SortIcon field="senior" />
              </span>
            </th>
            <th onClick={() => handleSort("staff")}>
              <span className="th-label">
                Staff <SortIcon field="staff" />
              </span>
            </th>
            <th>Range</th>
            <th>Levels</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((company) => {
            const entryVal = getMedianForSeniority(company, "Entry Level");
            const seniorVal = getMedianForSeniority(company, "Senior");
            const staffVal = getMedianForSeniority(company, "Staff");
            const isExpanded = expandedCompany === company.company;
            const isCompared = compareList.includes(company.company);
            const displayMedian =
              selectedSeniority !== "all"
                ? getMedianForSeniority(company, selectedSeniority)
                : company.medianTotal;

            return (
              <tr key={company.company} className={isCompared ? "compared-row" : ""}>
                <td className="sticky-col compare-col">
                  <input
                    type="checkbox"
                    checked={isCompared}
                    onChange={() => toggleCompare(company.company)}
                    title="Add to comparison"
                  />
                </td>
                <td className="sticky-col name-col">
                  <div className="company-name-cell">
                    <span className="company-name">
                      {company.company}
                      {company.isPrivate && (
                        <span className="private-badge">Private</span>
                      )}
                    </span>
                  </div>
                </td>
                <td>{renderTierBadge(company.tier)}</td>
                <td className="salary-cell">
                  {displayMedian
                    ? renderBar(
                        displayMedian,
                        maxMedian,
                        tierColors[company.tier]
                      )
                    : <span className="no-data">N/A</span>}
                </td>
                <td className="salary-cell mono">
                  {entryVal ? formatSalary(entryVal) : <span className="no-data">--</span>}
                </td>
                <td className="salary-cell mono">
                  {seniorVal ? formatSalary(seniorVal) : <span className="no-data">--</span>}
                </td>
                <td className="salary-cell mono">
                  {staffVal ? formatSalary(staffVal) : <span className="no-data">--</span>}
                </td>
                <td className="range-cell mono">{company.range}</td>
                <td>
                  <button
                    className="expand-btn"
                    onClick={() =>
                      setExpandedCompany(isExpanded ? null : company.company)
                    }
                  >
                    {isExpanded ? "Hide" : `${company.levels.length} levels`}
                  </button>
                  {isExpanded && (
                    <div className="levels-dropdown">
                      <table className="inner-table">
                        <thead>
                          <tr>
                            <th>Level</th>
                            <th>Seniority</th>
                            <th>Total Comp</th>
                          </tr>
                        </thead>
                        <tbody>
                          {company.levels.map((level) => (
                            <tr key={level.levelName}>
                              <td>{level.levelName}</td>
                              <td>
                                <span
                                  className="seniority-pill"
                                  data-seniority={level.normalizedSeniority}
                                >
                                  {level.normalizedSeniority}
                                </span>
                              </td>
                              <td className="mono">
                                {formatSalary(level.medianTotal)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <a
                        className="levels-link"
                        href={`https://www.levels.fyi/companies/${company.slug}/salaries/software-engineer`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View on Levels.fyi
                      </a>
                    </div>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );

  const renderChartView = () => {
    const sorted = [...filteredData].sort(
      (a, b) => b.medianTotal - a.medianTotal
    );
    const chartMax = Math.max(...sorted.map((c) => c.medianTotal));

    return (
      <div className="chart-view">
        <h3>Median Total Compensation by Company</h3>
        <div className="h-bar-chart">
          {sorted.map((company) => {
            const pct = (company.medianTotal / chartMax) * 100;
            return (
              <div className="h-bar-row" key={company.company}>
                <div className="h-bar-company">{company.company}</div>
                <div className="h-bar-track">
                  <div
                    className="h-bar-fill"
                    style={{
                      width: `${pct}%`,
                      backgroundColor: tierColors[company.tier],
                    }}
                  />
                </div>
                <div className="h-bar-value mono">
                  {formatSalary(company.medianTotal)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderSeniorityChart = () => {
    const dataForChart =
      compareList.length > 0 ? compareData : filteredData.slice(0, 12);
    const chartSeniorities: SeniorityLevel[] = [
      "Entry Level",
      "Mid Level",
      "Senior",
      "Staff",
      "Senior Staff / Principal",
    ];

    return (
      <div className="seniority-chart-view">
        <h3>
          Compensation by Seniority Level
          {compareList.length > 0
            ? ` (${compareList.length} selected)`
            : " (Top 12)"}
        </h3>
        <div className="seniority-grid">
          {chartSeniorities.map((seniority) => {
            const companies = dataForChart
              .map((c) => ({
                company: c.company,
                tier: c.tier,
                value: getMedianForSeniority(c, seniority),
              }))
              .filter((c) => c.value !== null)
              .sort((a, b) => (b.value ?? 0) - (a.value ?? 0));

            const max = Math.max(...companies.map((c) => c.value ?? 0));

            return (
              <div className="seniority-section" key={seniority}>
                <h4>{seniority}</h4>
                <div className="mini-bars">
                  {companies.map((c) => (
                    <div className="mini-bar-row" key={c.company}>
                      <span className="mini-bar-label">{c.company}</span>
                      <div className="mini-bar-track">
                        <div
                          className="mini-bar-fill"
                          style={{
                            width: `${((c.value ?? 0) / max) * 100}%`,
                            backgroundColor: tierColors[c.tier],
                          }}
                        />
                      </div>
                      <span className="mini-bar-value mono">
                        {formatSalary(c.value ?? 0)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderCompareView = () => {
    if (compareData.length === 0) {
      return (
        <div className="compare-empty">
          <p>Select companies to compare using the checkboxes in the table view.</p>
          <button onClick={() => setViewMode("table")}>Go to Table View</button>
        </div>
      );
    }

    const allLevels: SeniorityLevel[] = allSeniorityLevels;

    return (
      <div className="compare-view">
        <h3>
          Head-to-Head Comparison ({compareData.length} companies)
          <button
            className="clear-btn"
            onClick={() => setCompareList([])}
          >
            Clear All
          </button>
        </h3>
        <div className="compare-table-wrapper">
          <table className="compare-table">
            <thead>
              <tr>
                <th>Seniority</th>
                {compareData.map((c) => (
                  <th key={c.company}>
                    <span
                      className="compare-company-header"
                      style={{ borderBottomColor: tierColors[c.tier] }}
                    >
                      {c.company}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="highlight-row">
                <td>Median Overall TC</td>
                {compareData.map((c) => (
                  <td key={c.company} className="mono">
                    {formatSalary(c.medianTotal)}
                  </td>
                ))}
              </tr>
              {allLevels.map((seniority) => {
                const values = compareData.map((c) =>
                  getMedianForSeniority(c, seniority)
                );
                const maxVal = Math.max(
                  ...(values.filter(Boolean) as number[])
                );
                const hasAnyData = values.some((v) => v !== null);
                if (!hasAnyData) return null;

                return (
                  <tr key={seniority}>
                    <td>
                      <span
                        className="seniority-pill"
                        data-seniority={seniority}
                      >
                        {seniority}
                      </span>
                    </td>
                    {values.map((val, i) => (
                      <td
                        key={compareData[i].company}
                        className={`mono ${val === maxVal && val ? "highest-val" : ""}`}
                      >
                        {val ? formatSalary(val) : "--"}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const stats = useMemo(() => {
    const medians = filteredData.map((c) => c.medianTotal);
    const sorted = [...medians].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    const median =
      sorted.length % 2 !== 0
        ? sorted[mid]
        : Math.round((sorted[mid - 1] + sorted[mid]) / 2);

    return {
      count: filteredData.length,
      avg: Math.round(medians.reduce((a, b) => a + b, 0) / medians.length),
      median,
      max: Math.max(...medians),
      min: Math.min(...medians),
      topPayer: filteredData.reduce((a, b) =>
        a.medianTotal > b.medianTotal ? a : b
      ),
    };
  }, [filteredData]);

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>Big Tech Salary Explorer</h1>
          <p className="subtitle">
            SWE / AI / Data compensation across {salaryData.length} major U.S.
            tech companies
          </p>
          <p className="data-source">
            Data source:{" "}
            <a
              href="https://www.levels.fyi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Levels.fyi
            </a>{" "}
            | Last updated: March 28, 2026 | Total Compensation = Base + Stock
            + Bonus
          </p>
        </div>
      </header>

      {/* Stats Strip */}
      <div className="stats-strip">
        <div className="stat-card">
          <span className="stat-value">{stats.count}</span>
          <span className="stat-label">Companies</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{formatSalary(stats.avg)}</span>
          <span className="stat-label">Avg Median TC</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{formatSalary(stats.median)}</span>
          <span className="stat-label">Median of Medians</span>
        </div>
        <div className="stat-card highlight">
          <span className="stat-value">{stats.topPayer.company}</span>
          <span className="stat-label">
            Top: {formatSalary(stats.topPayer.medianTotal)}
          </span>
        </div>
      </div>

      {/* Controls */}
      <div className="controls">
        <div className="control-row">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search companies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="seniority-filter">
            <label>Seniority:</label>
            <select
              value={selectedSeniority}
              onChange={(e) =>
                setSelectedSeniority(
                  e.target.value as SeniorityLevel | "all"
                )
              }
            >
              <option value="all">All (Overall Median)</option>
              {allSeniorityLevels.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="visibility-filter">
            <label>Type:</label>
            <select
              value={showPrivateOnly === null ? "all" : showPrivateOnly ? "private" : "public"}
              onChange={(e) => {
                const val = e.target.value;
                setShowPrivateOnly(
                  val === "all" ? null : val === "private"
                );
              }}
            >
              <option value="all">All Companies</option>
              <option value="public">Public Only</option>
              <option value="private">Private Only</option>
            </select>
          </div>
        </div>

        <div className="tier-filters">
          <span className="filter-label">Tiers:</span>
          {allTiers.map((tier) => (
            <button
              key={tier}
              className={`tier-btn ${selectedTiers.includes(tier) ? "active" : ""}`}
              style={{
                borderColor: tierColors[tier],
                backgroundColor: selectedTiers.includes(tier)
                  ? tierColors[tier] + "20"
                  : "transparent",
                color: selectedTiers.includes(tier)
                  ? tierColors[tier]
                  : undefined,
              }}
              onClick={() => toggleTier(tier)}
            >
              {tier}
            </button>
          ))}
          {selectedTiers.length > 0 && (
            <button
              className="clear-filters-btn"
              onClick={() => setSelectedTiers([])}
            >
              Clear
            </button>
          )}
        </div>

        <div className="view-tabs">
          <button
            className={`tab ${viewMode === "table" ? "active" : ""}`}
            onClick={() => setViewMode("table")}
          >
            Table
          </button>
          <button
            className={`tab ${viewMode === "chart" ? "active" : ""}`}
            onClick={() => setViewMode("chart")}
          >
            Bar Chart
          </button>
          <button
            className={`tab ${viewMode === "levels" ? "active" : ""}`}
            onClick={() => setViewMode("levels")}
          >
            By Seniority
          </button>
          <button
            className={`tab ${viewMode === "compare" ? "active" : ""}`}
            onClick={() => setViewMode("compare")}
          >
            Compare {compareList.length > 0 && `(${compareList.length})`}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="main-content">
        {viewMode === "table" && renderTableView()}
        {viewMode === "chart" && renderChartView()}
        {viewMode === "levels" && renderSeniorityChart()}
        {viewMode === "compare" && renderCompareView()}
      </main>

      <footer className="app-footer">
        <p>
          Data source:{" "}
          <a
            href="https://www.levels.fyi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Levels.fyi
          </a>{" "}
          | All figures are median total compensation (Base + Stock + Bonus) in
          USD for U.S.-based Software Engineer roles | March 2026
        </p>
        <p className="disclaimer">
          Compensation data is self-reported and verified by Levels.fyi.
          Individual offers may vary significantly based on location, experience,
          negotiation, and market conditions. "Total Compensation" includes
          annualized stock grants.
        </p>
      </footer>
    </div>
  );
}

export default App;
