

export default function Picture(props) {
    console.log(props)
    
    return (
      <div>
          <img src={props.picture.download_url} width="400" height="500" alt="kkk"></img>
      </div>
    );
}