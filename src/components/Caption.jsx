import 'reactjs-popup/dist/index.css';

function Caption(props) {
  console.log(props.info);
  return(
    <>
      <div className='modal'>
          <div className='content' style = {{ color:"black", margin:"50px"}}>
              <p style = {{fontWeight: "bold", fontSize: "32px", marginBottom: "2px"}}> {props.info.author} </p>
              <p style = {{ fontSize: "32px", marginTop: "2px"}}><strong><em>{props.info.title}</em>, </strong>{props.info.year}</p>
              <p style = {{ fontSize: "25px" }}> {props.info.description}</p>
          </div>
      </div>
    </>
  )
}

export default Caption;