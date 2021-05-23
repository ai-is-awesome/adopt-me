import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
class Details extends React.Component {
  constructor(props) {
    super(props);
    console.log("id is ", this.props.id);
    this.state = {
      loading: true,
      errormsg: "",
      showResults: false,
    };
  }
  componentDidMount() {
    pet
      .animal(this.props.id)
      .then(({ animal }) => {
        console.log("DETAIL REQUEST SUCESSFUL");

        console.log("animal: ", animal);
        this.setState({
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
          loading: false,
          showResults: true,
        });
      })
      .catch((err) => {
        console.log("errrrrrrrrrrrrrrrrrrrrror");
        this.setState({ errormsg: "Unable to load results", loading: false });
      });
  }

  render() {
    console.log("state", this.state);
    console.log("media", this.state.media);

    const {
      animal,
      breed,
      location,
      description,
      name,
      errormsg,
      media,
    } = this.state;

    if (this.state.loading) {
      return <h2>Loading...</h2>;
    }

    if (this.state.errormsg) {
      return <h2>{this.state.errormsg}</h2>;
    }

    if (this.state.showResults) {
      return (
        <div className="details">
          <div>
            <h1>{name}</h1>
            <h2>{`${animal} - ${breed} - ${location}`}</h2>
            <button>Adopt {name}</button>
            {console.log("props sending to carousel", media)}
            <Carousel media={media} />
            <p>{description}</p>
          </div>
        </div>
      );
    }
  }
}

export default Details;
