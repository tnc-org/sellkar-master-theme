import React from "react";
import TeamCard from "./TeamCard";

export const TeamCardWrapper = ({ TeamData: data = TeamData }) => {
  return (
    <div className="px-4">
      <div className="flex gap-4 flex-col md:flex-row justify-between items-center">
        {data.map((member) => (
          <TeamCard
            key={member.id}
            image={member.image}
            name={member.name}
            role={member.role}
            socials={member.socials}
          />
        ))}
      </div>
    </div>
  );
};
