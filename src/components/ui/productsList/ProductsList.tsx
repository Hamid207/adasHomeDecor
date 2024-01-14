import style from "./ProductsList.module.css";

interface List {
  name: string;
  lists: string[];
}

// const ProductsList = ({ list, name }: { list: string[]; name: string }) => {
const ProductsList = (props: List) => {
  //   let [list, setList] = useState<string[]>([]);
  //   useEffect(() => {
  //     setList(props.lists);
  //   }, []);

  return (
    <div className={style.body}>
      <p>{props.name}</p>
      <ul className={style.list_body}>
        {props.lists.map((list, index) => (
          <li className={style.list} key={index}>
            <input type="checkbox" className={style.input} />
            <p>{list}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
