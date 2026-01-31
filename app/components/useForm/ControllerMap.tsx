
import { Control } from "react-hook-form";

import FileUploadController from "./FileController";
import ImageAndFileUploader from "./ImageAndFile";
import { useFormMode } from "./FormMode";


const   ControllerMap = (props: any) => {
  const { isReadOnly } = useFormMode();
  const mergedProps = {
    ...props,
    disabled: Boolean(isReadOnly || props?.disabled),
  };
  const { type } = mergedProps;
  switch (type) {


    case "file":
      return <FileUploadController {...props} />;
    case "imageAndFile":
      return <ImageAndFileUploader {...props} />;


    default:
      return null;
  }
};

export type FormFieldConfig = {
  name?: string;
  label?: string;
  labelIcon?: any;
  type?:
    | "text"
    | "number"
    | "email"
    | "password"
    | "url"
    | "select"
    | "checkbox"
    | "textarea"
    | "file"
    | "date"
    | "radio"
    | "tel"
    | "tagsinput"
    | "inputGroup"
    | "switch"
    | "button"
    | "inputSelectController"
    | "logoImage"
    | "image"
    | "switch2"
    | "imageAndFile"
    | "multiImage"
    | "phoneNumber";
  disabled?: boolean;
  options?: { value: string; label: string; disabled?: boolean }[];
  noOfFiles?: number;
  accept?: string[];
  rules?: any;
  control: Control<any>;
  hidden?: boolean;
  onChange?: (e: any) => void;
  watch?: any;
  setValue?: (name: string, value: any, options?: any) => void;
  fullWidth?: boolean;
  errors?: any;
  selectName?: string;
  selectRules?: any;
  inputOptions?: { value: string; label: string }[];
  position?: "left" | "right";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  variant?:
    | "default"
    | "outline"
    | "destructive"
    | "secondary"
    | "ghost"
    | "assetButton";
  size?: "default" | "sm" | "lg" | "icon";
  text?: string;
  onClick?: () => void;
  value?: string;
  placeholder?: string;
  maxSize?: number;
  bottomText?: string;
  allowFutureDates?: boolean;
  meta?: {
    refId: string;
    belongsTo: string;
    isPublic: boolean;
  };
  defaultValue?: string | number;
  onBlur?: () => void;
  inputType?: "text" | "number";
  autoClose?: boolean;
  dayDisabled?: (date: Date) => boolean;
  isDirty?: boolean;
  countryCode?: string;
};

export default ControllerMap;
