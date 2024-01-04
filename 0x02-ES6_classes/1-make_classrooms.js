import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const values = [19, 20, 34];
  const Arrayclass = [];

  for (const value of values) {
    Arrayclass.push(new ClassRoom(value));
  }
  return Arrayclass;
}
