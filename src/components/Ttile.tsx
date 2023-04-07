interface TitleProps {
  name: string
} 

export function Title(props: TitleProps) {
  return(
    <h1>{props.name}</h1>
  );
}