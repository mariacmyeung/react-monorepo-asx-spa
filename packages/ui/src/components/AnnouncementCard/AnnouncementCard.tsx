import { Card } from './AnnouncementCard.styled';

export const AnnouncementCard = ({ title, date }: { title: string; date: string }) => (
  <Card>
    <h3>{title}</h3>
    <p>{date}</p>
  </Card>
);
