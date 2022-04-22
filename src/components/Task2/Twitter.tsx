import { useEffect, useState } from "react";

interface TwitterProps {
  userName: string;
}
interface UserData {
  id: number;
  name: string;
}

interface BadgeProps {
  info: UserData;
}

export const fetchUser = (userName: string): Promise<UserData> => {
  return new Promise((resolve) => {
    resolve({
      id: 2554,
      name: "Kolya",
    });
  });
};

const Twitter: React.FC<TwitterProps> = ({ userName }) => {
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    fetchUser(userName).then((res: UserData) => {
      setUser(res);
    });
  }, []);

  const Loading = () => {
    return <div>Loading...</div>;
  };

  const Badge = (info: BadgeProps) => {
    return <div></div>;
  };

  return user === null ? <Loading /> : <Badge info={user} />;
};

export default Twitter;
