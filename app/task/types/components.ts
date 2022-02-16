import { ReactElement } from "react";

export interface IIconProps {
  size: number;
  color: string;
}

export interface IIconButtonProps {
  onPress: () => void;
  Icon: (props: IIconProps) => ReactElement;
}

export interface ITaskMenuProps {
  show: boolean;
  onHidePress: () => void;
  onEditPress: () => void;
  onRemovePress: () => Promise<void>;
}

export interface ITaskItemProps {
  id: string;
  userId: string | undefined;
  content: string;
  done: boolean;
  createdAt: string;
}

export interface IEditModalProps {
  onClosePress: () => void;
  customerId: string | undefined;
}
