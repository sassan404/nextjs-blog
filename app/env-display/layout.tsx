export default function EnVDisplay() {
  console.log("Environment Type:", process.env.ENV_TYPE);
  return <div>{process.env.ENV_TYPE}</div>;
}
