interface TitleProps {
  name: string
  isDark?: boolean
} 

export function Title({ name, isDark = false } : TitleProps) {
  return(
    <h1 className={`button ${isDark ? 'dark' : ''}`}>
      {name}
    </h1>
  );
}