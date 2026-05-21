import '../assets/css/AI.css'

function AI() {
    return(
        <>
            <div className="ai d-flex flex-grow-1 overflow-hidden h-100">

                {/* Chat Sidebar */}
                <div className="chat-sidebar">
                    <div className="d-flex m-3">
                        <button className="new-chat text-center py-2 w-100">+ New Chat</button>
                        <button className="toggle-panel ms-2"><span className="material-symbols-outlined toggle-panel-icon text-white py-2">left_panel_close</span></button>
                    </div>
                    <hr></hr>
                    <div className="search d-flex rounded mx-3">
                        <span className="material-symbols-outlined p-2">search</span>       
                        <input className="search-bar form-control mr-sm-2 p-0" type="search" placeholder="Search chats..." aria-label="Search"></input>
                        
                    </div>
                    <p className="recent mx-3 mt-4">RECENT Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum laborum quia ipsam nisi reprehenderit sunt quas fugit, eligendi voluptatem adipisci sint, est libero animi, accusamus inventore recusandae cum laboriosam velit consequuntur in suscipit? Voluptatibus odio quasi facilis explicabo ullam nihil tempora blanditiis, cupiditate unde recusandae quibusdam maxime hic exercitationem. Nostrum odio excepturi voluptas nesciunt veritatis expedita, explicabo, optio omnis corporis accusamus at numquam vitae iste dolorum impedit sunt ipsum voluptatibus exercitationem quae sed. Minima blanditiis facere quibusdam temporibus praesentium ducimus cupiditate nisi. Dolor, vitae enim at modi eos itaque aperiam iure et qui nobis similique tempora doloremque iusto quos ex error sapiente ipsam fugiat corrupti adipisci. Quo laboriosam culpa sunt? Eius esse saepe, quidem exercitationem assumenda impedit? Odio iste at officia obcaecati, voluptas eaque enim aut reprehenderit. Nam vitae iste ullam in iure aliquam voluptate totam, aut doloremque quasi necessitatibus, ipsum ex! Sit, neque odio porro dignissimos a laborum asperiores consequatur quo sunt assumenda aliquam illum eveniet minima reiciendis doloremque in voluptate, nulla perferendis? Blanditiis quisquam molestias voluptatibus. Libero obcaecati voluptatum expedita voluptate? Sapiente ratione nisi odit, magnam laudantium iste amet ullam blanditiis culpa ut incidunt, tenetur dolorum illum error? Odit quas impedit assumenda nulla sequi ipsam? Accusamus, eligendi? Odio error explicabo beatae corrupti enim facilis, accusantium, impedit minus reiciendis assumenda fugiat quisquam?</p>
                    <p className="no-chats text-center">No chats yet</p>
                </div>

                {/* Main Section */}
                <div className="right-section d-flex flex-column flex-grow-1 w-100 overflow-hidden">
                    <nav className="">
                        <div className="dropdown p-2">
                            <button className="agent-button text-white d-flex align-center gap-2 btn btn-transparent" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="material-symbols-outlined text-center my-auto ai-icon">star_shine</span>
                                Placeholder AI Agent
                                <span className="material-symbols-outlined text-center my-auto">keyboard_arrow_down</span>
                            </button>
                            <ul className="dropdown-menu px-1 pb-1">
                                <li><a className="dropdown-item" href="#">Placeholder AI Agent</a></li>
                                <li><a className="dropdown-item" href="#">Another AI Agent</a></li>
                                <li><a className="dropdown-item" href="#">The Coolest AI Agent</a></li>
                            </ul>
                        </div>
                    </nav>

                    <main className='main d-flex flex-column justify-content-between overflow-hidden'>
                        <div className='message-window flex-grow-1 text-center overflow-auto'>
                            <div className='agent-icon-bg d-flex justify-content-center align-items-center mx-auto'>
                                <span className="agent-icon material-symbols-outlined text-dark"> robot_2 </span>
                            </div>
                            <h3 className='text-light my-3 fw-bold'>How can I help today?  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum laborum quia ipsam nisi reprehenderit sunt quas fugit, eligendi voluptatem adipisci sint, est libero animi, accusamus inventore recusandae cum laboriosam velit consequuntur in suscipit? Voluptatibus odio quasi facilis explicabo ullam nihil tempora blanditiis, cupiditate unde recusandae quibusdam maxime hic exercitationem. Nostrum odio excepturi voluptas nesciunt veritatis expedita, explicabo, optio omnis corporis accusamus at numquam vitae iste dolorum impedit sunt ipsum voluptatibus exercitationem quae sed. Minima blanditiis facere quibusdam temporibus praesentium ducimus cupiditate nisi. Dolor, vitae enim at modi eos itaque aperiam iure et qui nobis similique tempora doloremque iusto quos ex error sapiente ipsam fugiat corrupti adipisci. Quo laboriosam culpa sunt? Eius esse saepe, quidem exercitationem assumenda impedit? Odio iste at officia obcaecati, voluptas eaque enim aut reprehenderit. Nam vitae iste ullam in iure aliquam voluptate totam, aut doloremque quasi necessitatibus, ipsum ex! Sit, neque odio porro dignissimos a laborum asperiores consequatur quo sunt assumenda aliquam illum eveniet minima reiciendis doloremque in voluptate, nulla perferendis? Blanditiis quisquam molestias voluptatibus. Libero obcaecati voluptatum expedita voluptate? Sapiente ratione nisi odit, magnam laudantium iste amet ullam blanditiis culpa ut incidunt, tenetur dolorum illum error? Odit quas impedit assumenda nulla sequi ipsam? Accusamus, eligendi? Odio error explicabo beatae corrupti enim facilis, accusantium, impedit minus reiciendis assumenda fugiat quisquam?</h3>
                            <h6 className='agent-subtext fw-light mx-auto'>Ask anything — break down projects, generate user stories, plan sprints, or get unblocked.</h6>
                        </div>

                        <div className='chat-bg d-flex justify-content-center align-items-center w-100'>
                            <div className="chat d-flex justify-content-center align-items-center rounded">
                                <span className="material-symbols-outlined p-2">search</span>       
                                <input className="search-bar form-control mr-sm-2 p-0" type="search" placeholder="Search chats..." aria-label="Search"></input>
                            </div>    
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default AI;