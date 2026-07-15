import "./ActionPlan.scss";

interface Props {
  actionPlan: string[];
  setIsActionPlanOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ActionPlan: React.FC<Props> = ({
  actionPlan,
  setIsActionPlanOpen,
}) => {
  return (
    <div className="ActionPlan">
      <div className="close-button" onClick={() => setIsActionPlanOpen(false)}>
        ❌
      </div>
      <ol>
        {actionPlan.map((intervention, index) => (
          <li key={index}>{intervention}</li>
        ))}
      </ol>
    </div>
  );
};
