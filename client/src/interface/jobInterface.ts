interface IJob {
  id: string;
  order: number;
  title: string;
  dates: string;
  duties: string[];
  tools?: string[];
  company: string;
}

export default IJob;
