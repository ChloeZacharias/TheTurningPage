import React from "react";
import { familyTreeData } from "../data/books.js";

// Recursively render one person + their children
const TreeNode = ({ node }) => {
  return (
    <div className="family-tree__generation">
      <div
        className={`family-tree__member ${
          node.deceased ? "family-tree__member--deceased" : ""
        }`}
      >
        <div className="family-tree__member-name">{node.name}</div>
        <div className="family-tree__member-relation">{node.relation}</div>

        {node.deceased && (
          <div className="family-tree__member-status">† Deceased</div>
        )}

        <div className="family-tree__member-info">{node.info}</div>
      </div>

      {/* Partner (if present) */}
      {node.partner && (
        <div className="family-tree__partner">
          <TreeNode node={node.partner} />
        </div>
      )}

      {/* Children (if present) */}
      {node.children && node.children.length > 0 && (
        <div className="family-tree__children">
          {node.children.map((child, index) => (
            <TreeNode key={index} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

const FamilyTree = () => {
  return (
    <div className="family-tree__container">
      <h4 className="family-tree__title">The Cunningham Family Tree</h4>

      <div className="family-tree__grid">
        {familyTreeData.children.map((branch, index) => {
          // --- Special handling for the Parent Group ---
          if (branch.isGroup) {
            return (
              <div key={index} className="family-tree__generation">
                {/* PARENTS ROW: Robert — Audrey — Marcelo */}
                <div className="family-tree__children">
                  {branch.children.map((parent, idx) => (
                    <TreeNode key={idx} node={parent} />
                  ))}
                </div>

                {/* CHILDREN ROW: Ernest, Michael, Sofia */}
                <div className="family-tree__children">
                  {branch.descendants.map((child, idx) => (
                    <TreeNode key={idx} node={child} />
                  ))}
                </div>
              </div>
            );
          }

          // --- Normal nodes (like Katherine + Andrew + Amy) ---
          return <TreeNode key={index} node={branch} />;
        })}
      </div>
    </div>
  );
};

export default FamilyTree;
