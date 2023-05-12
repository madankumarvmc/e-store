import React from "react";

const Sidebar = () => (
  <div className="sidebar_category">
    <div className="section-title">
      <h4 style={{ fontSize: "18px" }}>Categories</h4>
    </div>
    <div className="category-accordion">
      <div id="categoryAccordion">
        <div className="card border-0">
          <div className="card-header bg-transparent" id="womenCategory">
            <h2 className="mb-0">
              <button
                className="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#womenCollapse"
                aria-expanded="false"
                aria-controls="womenCollapse"
                style={{ fontSize: "16px", textDecoration: "none" }}
              >
                Women
              </button>
            </h2>
          </div>
          <div
            id="womenCollapse"
            aria-labelledby="womenCategory"
            data-parent="#categoryAccordion"
          >
            <div className="card-body pl-0">
              <ul className="list-unstyled">
                <li>
                  <a
                    href="#"
                    className="text-dark"
                    style={{
                      paddingLeft: "20px",
                      textDecoration: "none",
                    }}
                  >
                    Coats
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-dark"
                    style={{
                      paddingLeft: "20px",
                      textDecoration: "none",
                    }}
                  >
                    Jackets
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-dark"
                    style={{
                      paddingLeft: "20px",
                      textDecoration: "none",
                    }}
                  >
                    Dresses
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-dark"
                    style={{
                      paddingLeft: "20px",
                      textDecoration: "none",
                    }}
                  >
                    Shirts
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Sidebar;
