import React from 'react'

export default function About(props) {
    return (
        <div className='my-3' style={{ color: props.mode === "Light" ? "white" : "black" }}>
            <h1><b>About TextUtils</b></h1>
            <p>Welcome to TextUtils – Your Ultimate Text Manipulation Hub!</p>

            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={{
                    background: props.mode === "Dark" ? "white" : "rgb(42 100 153)",
                    color: props.mode === "Light" ? "white" : "black",
                    border: "1px solid",
                    borderColor: props.mode === "Light" ? "white" : "black"
                }}>
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{
                    background: props.mode === "Dark" ? "white" : "rgb(42 100 153)",
                    color: props.mode === "Light" ? "white" : "black",
                    border: "1px solid",
                    borderColor: props.mode === "Light" ? "white" : "black"
                }}>
                            <b>Mission and Purpose</b>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Clearly state the mission and purpose of the website. Explain why text analysis is important and how your website can help users.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{
                    background: props.mode === "Dark" ? "white" : "rgb(42 100 153)",
                    color: props.mode === "Light" ? "white" : "black",
                    border: "1px solid",
                    borderColor: props.mode === "Light" ? "white" : "black"
                }}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{
                    background: props.mode === "Dark" ? "white" : "rgb(42 100 153)",
                    color: props.mode === "Light" ? "white" : "black",
                    border: "1px solid",
                    borderColor: props.mode === "Light" ? "white" : "black"
                }}>
                            <b>Overview of Services</b>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Provide a brief overview of the text analysis services or tools offered on the website. Highlight key features and functionalities.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{
                    background: props.mode === "Dark" ? "white" : "rgb(42 100 153)",
                    color: props.mode === "Light" ? "white" : "black",
                    border: "1px solid",
                    borderColor: props.mode === "Light" ? "white" : "black"
                }}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{
                    background: props.mode === "Dark" ? "white" : "rgb(42 100 153)",
                    color: props.mode === "Light" ? "white" : "black",
                    border: "1px solid",
                    borderColor: props.mode === "Light" ? "white" : "black"
                }}>
                            <b>Team or Creator Information</b>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Introduce the team or individual behind the website. Include relevant qualifications and experience that establish credibility in the field of text analysis.
                        </div>
                    </div>
                </div>

                <div className="accordion-item" style={{
                    background: props.mode === "Dark" ? "white" : "rgb(42 100 153)",
                    color: props.mode === "Light" ? "white" : "black",
                    border: "1px solid",
                    borderColor: props.mode === "Light" ? "white" : "black"
                }}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{
                    background: props.mode === "Dark" ? "white" : "rgb(42 100 153)",
                    color: props.mode === "Light" ? "white" : "black",
                    border: "1px solid",
                    borderColor: props.mode === "Light" ? "white" : "black"
                }}>
                            <b>Background Story</b>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Share the story of how the website came into existence. Discuss any challenges faced and milestones achieved.
                        </div>
                    </div>
                </div>

                <div className="accordion-item" style={{
                    background: props.mode === "Dark" ? "white" : "rgb(42 100 153)",
                    color: props.mode === "Light" ? "white" : "black",
                    border: "1px solid",
                    borderColor: props.mode === "Light" ? "white" : "black"
                }}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{
                    background: props.mode === "Dark" ? "white" : "rgb(42 100 153)",
                    color: props.mode === "Light" ? "white" : "black",
                    border: "1px solid",
                    borderColor: props.mode === "Light" ? "white" : "black"
                }}>
                            <b>Vision for the Future</b>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Share your vision for the future of the website. Outline any upcoming features, improvements, or expansions you have planned.
                        </div>
                    </div>
                </div>

                <div className="accordion-item" style={{
                    background: props.mode === "Dark" ? "white" : "rgb(42 100 153)",
                    color: props.mode === "Light" ? "white" : "black",
                    border: "1px solid",
                    borderColor: props.mode === "Light" ? "white" : "black"
                }}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{
                    background: props.mode === "Dark" ? "white" : "rgb(42 100 153)",
                    color: props.mode === "Light" ? "white" : "black",
                    border: "1px solid",
                    borderColor: props.mode === "Light" ? "white" : "black"
                }}>
                            <b>Contact Information</b>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Include contact details or a contact form for users who have questions, feedback, or collaboration inquiries.
                        </div>
                    </div>
                </div>

                <div className="accordion-item" style={{
                    background: props.mode === "Dark" ? "white" : "rgb(42 100 153)",
                    color: props.mode === "Light" ? "white" : "black",
                    border: "1px solid",
                    borderColor: props.mode === "Light" ? "white" : "black"
                }}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{
                    background: props.mode === "Dark" ? "white" : "rgb(42 100 153)",
                    color: props.mode === "Light" ? "white" : "black",
                    border: "1px solid",
                    borderColor: props.mode === "Light" ? "white" : "black"
                }}>
                            <b>Privacy and Security</b>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Assure users about the privacy and security measures in place, especially if your website involves handling sensitive information.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}