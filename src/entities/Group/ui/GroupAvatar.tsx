import { Avatar, AvatarFallback, AvatarImage } from "@/shared";
import { UsersRound } from "lucide-react";
import { CSSProperties, FC } from "react";

type UserAvatarProps = {
  src?: string;
  outline?: string;
};

export const GroupAvatar: FC<UserAvatarProps> = ({ outline, src }) => {
  return (
    <Avatar
      style={
        {
          "--avatar-outline": outline,
        } as CSSProperties
      }
      data-outline={outline}
      className="h-[100px] w-[100px] outline outline-2 -outline-offset-2 outline-[var(--avatar-outline,transparent)]"
    >
      <AvatarImage src={src} />
      <AvatarFallback>
        <UsersRound className="h-12 w-12" />
      </AvatarFallback>
    </Avatar>
  );
};
