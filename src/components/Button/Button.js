import Parser from 'html-react-parser';

export default function Button({ text, icon, clas, link }) {
    return (
        <a className={clas} href={link} target="_blank" rel="noreferrer noopener nofollow">
            {Parser(icon)}
            {text}
        </a>
    )
}
