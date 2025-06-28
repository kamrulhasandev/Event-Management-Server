export interface IEvent {
  _id?: string;
  title: string;
  name: string;
  date: string;
  time: string;
  location: string;
  description: string;
  attendeeCount: number;
  attendees: string[];
  userId: string;
}