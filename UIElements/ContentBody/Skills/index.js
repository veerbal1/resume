import React from 'react';
import Body2 from '../../../components/Typography/Body2';
import myInfo from '../../../info/my-info';
import styles from '../../../styles/UIElements/Skills.module.scss';

const Skills = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1em',
      }}
    >
      {myInfo.skills.map((skill) => {
        return (
          <SkillItem
            key={skill.id}
            name={skill.name}
            level={skill.level[myInfo.language]}
          />
        );
      })}
    </div>
  );
};

const SkillItem = ({ name, level }) => {
  return (
    <div className={styles.skillItem}>
      <Body2 highlight>{name}</Body2>
      <div
        style={{
          flex: 1,
        }}
      ></div>
      <Body2>{level}</Body2>
    </div>
  );
};

export default Skills;
