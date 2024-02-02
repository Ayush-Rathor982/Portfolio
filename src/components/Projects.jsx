export default function Projects() {
    return (
        <div className="projects mt-5" id="projects">
            <h1 className="py-3 text-center mb-4" style={{'font-weight': 'bold','font-family': 'initial'}}>PROJECTS</h1>
            <div className="project d-flex justify-content-around">
            <div class="card" style={{width:'18rem'}}>
                <img src="img/imagetopdf.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title text-center">Image To PDF Converter</h5>
                </div>
            </div>
            <div class="card" style={{width:'18rem'}}>
                <img src="img/elearning.png" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title text-center">E-Learning Platform</h5>
                </div>
            </div>
            <div class="card" style={{width:'18rem'}}>
                <img src="img/blockchain5G.png" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title text-center">Blochain in 5G Environment</h5>
                </div>
            </div>
            </div>
            <div className="project d-flex justify-content-around p-5 mx-2">
            <div class="card" style={{width:'18rem'}}>
                <img src="img/image_detection.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title text-center">Image Detection</h5>
                </div>
            </div>
            <div class="card" style={{width:'18rem'}}>
                <img src="img/DCT.png" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title text-center">Digital Epidemiology</h5>
                </div>
            </div>
            </div>
        </div>
    )
}