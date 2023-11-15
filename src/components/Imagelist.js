import '../Imagelist.css';
function Imagelist({images, searchQuery}){
    const filteredImages = images.filter((image) => 
    image.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    const renderedImages = filteredImages.map((image, index) => {
            return (
                <div key={index} className="img-container">
                    <img src={image.url} alt="Robot pic" className="img-pic" />
                    <p id="name">{image.name}</p>
                    <p id='email'>{image.email}</p>
                </div>
            )
            })
    return (
        <div className="content-headed">
            {renderedImages}
        </div>
    );
};

export default Imagelist;