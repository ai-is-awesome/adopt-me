import React from "react";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      active: 0,
    };
  }

  static getDerivedStateFromProps(props) {
    let photos = ["http://placecorgi.com/600/600"];
    if (props.media.length) {
      photos = props.media.map((media) => media.large);
    }
    console.log("photos from derived state: ", photos);
    return { photos };
  }

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === active ? "active" : ""}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;

// class Carousel extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("carousel props : ", props);
//     const p = props.media.map((photo) => photo.large);
//     this.state = { photos: p, active: 0 };
//   }

//   render() {
//     const { photos, active } = this.state;
//     return (
//       <div className="carousel">
//         <img src={photos[active]} />
//         <div className="carousel-smaller">
//           {photos.map((photo, index) => (
//             <img
//               key={photo}
//               onClick={this.handleIndexClick}
//               data-index={index}
//               src={photo}
//               className={index === active ? "active" : ""}
//               alt="animal thumbnail"
//             />
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default Carousel;
