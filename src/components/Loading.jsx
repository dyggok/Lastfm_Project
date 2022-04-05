function Loading(props){
  const {theme} = props;

  return(<>
    <div className={`spinner-border ${theme.backgroundColor == "bg-light" ? "" : "text-light"}`} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </>)
}
export default Loading;