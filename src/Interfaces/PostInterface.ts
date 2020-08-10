export interface PInterface {
  id: number;
  body: string;
  title: string;
  userId: number;
}

export interface FInterface {
  data: PInterface[];
  error: any;
  loading: boolean;
}
