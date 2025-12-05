import React from "react";
import { familyTreeData } from "../data/books.js";

const FamilyTree = () => {
  return (
    <div className="family-tree__container">
      <h4 className="family-tree__title">The Cunningham Family Tree</h4>
      <div className="family-tree__grid">
        {familyTreeData.generations.map((generation, genIndex) => (
          <div key={genIndex} className="family-tree__generation">
            <span className="family-tree__generation-label">{generation.label}</span>
            {generation.members.map((member, memberIndex) => (
              <div 
                key={memberIndex} 
                className={`family-tree__member ${member.deceased ? 'family-tree__member--deceased' : ''}`}
              >
                <div className="family-tree__member-name">{member.name}</div>
                <div className="family-tree__member-relation">{member.relation}</div>
                {member.deceased && (
                  <div className="family-tree__member-status">† Deceased</div>
                )}
                <div className="family-tree__member-info">{member.info}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FamilyTree;
