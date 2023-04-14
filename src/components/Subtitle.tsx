interface SubtitleProps {
  name?: string
}

export function Subtitle(props: SubtitleProps) {
  return(
    <h2>{props.name}</h2>
  ); 
}