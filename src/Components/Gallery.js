

function Gallery(props){
  return (
      <div className="gallery" style={{'width': '100%'}}>
         <p>{props.artist}{props.objectImg ? ` - ${props.title}` : '' }</p>
          <img src={props.objectImg} alt={props.title} />
          
      </div>
  )
}

export default Gallery;
