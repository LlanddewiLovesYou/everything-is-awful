export type Question = {
  question: string;
  intervention?: string;
  override?: boolean;
  showIntervention?: "yes" | "no";
  buttons?: {
    yes?: boolean;
    no?: boolean;
    continue?: boolean;
  };
};
