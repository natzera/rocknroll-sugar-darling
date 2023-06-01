import '../styles/title.scss';

interface TitleProps {
  name: string
  isDark?: boolean
} 

export function Title({ name, isDark = false } : TitleProps) {
  return <h1 className={`title ${isDark ? 'dark' : ''}`}>{name}</h1>;
 ;
}