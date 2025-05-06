import React, { Component } from 'react';

export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false, // スマホ用の開閉状態
    };
  }

  toggleSidebar = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    return (
      <div className="md:w-1/5">
        {/* ハンバーガーアイコン（スマホ用） */}
        <div className="md:hidden p-4">
          <button
            className="text-2xl focus:outline-none"
            onClick={this.toggleSidebar}
          >
            ☰
          </button>
        </div>

        {/* サイドバー本体（PCは常に表示、スマホはisOpenがtrueなら表示） */}
        {(this.state.isOpen || window.innerWidth >= 768) && (
          <div className="bg-gray-100 p-4 h-[90vh] md:block">
            <nav>
              <ul>
                <li className="h-20">
                  <a
                    className="block hover:bg-gray-500 h-full flex items-center px-4"
                    href="/uppgift2"
                  >
                    uppgift2
                  </a>
                </li>
                <li className="h-20">
                  <a
                    className="block hover:bg-gray-500 h-full flex items-center px-4"
                    href="/uppgift3"
                  >
                    uppgift3
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    );
  }
}

export default Sidebar;
