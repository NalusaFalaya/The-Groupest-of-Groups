import '../assets/css/AI.css'

function AI() {
    return(
        <>
            <div className="d-flex">

                {/* Chat Sidebar */}
                <div className="chat-sidebar min-vh-100">
                    <div className="d-flex m-3">
                        <button className="new-chat text-center py-2 px-5">+ New Chat</button>
                        <button className="toggle-panel ms-2"><span className="material-symbols-outlined toggle-panel-icon text-white py-2">left_panel_close</span></button>
                    </div>
                    <div className="search d-flex rounded mx-auto">
                        <span className="material-symbols-outlined p-2">search</span>       
                        <input className="search-bar form-control mr-sm-2 p-0" type="search" placeholder="Search chats..." aria-label="Search"></input>
                        
                    </div>
                </div>

                {/* Main Section */}
                <div>


                </div>
            </div>
        </>
    )
}

export default AI;