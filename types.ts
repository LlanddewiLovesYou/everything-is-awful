export type Question = {
  question: string;
  intervention?: string;
  override?: boolean;
  buttons: {
    yes: boolean;
    no: boolean;
    continue: boolean;
  };
};
