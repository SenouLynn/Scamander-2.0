type TestPack<TestObjectType = any> = {
  name: string;
  flavor: "function" | "render" | "route";

  //Conditional these
  function?: Function;
  Component?: React.FC;

  //Conditional these
  keys?: Test_KeyCheck<TestObjectType>[];
  routes?: any[]; //Todo: type
};

type Test_KeyCheck<ObjectType = any> = {
  case: string; //Test description => "should render etc.."
  type: "string" | "function" | "object";
  key: keyof ObjectType;
  initialValue: any;
};
