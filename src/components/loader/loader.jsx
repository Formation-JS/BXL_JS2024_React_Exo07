import style from './loader.module.css';

export default function Loader() {

    return (
        <div className={style['lds-default']}>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
    );
}