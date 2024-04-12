import React from "react";
import styles from "./mini-menu.module.css";

export type MiniMenuItems = {
  hashId: string;
  title: string;
};

type MiniMenuProps = {
  model: MiniMenuItems[];
};

function MiniMenu({ model }: MiniMenuProps) {
  return (
    <div className="overflow-x-auto">
      <nav
        className={`${styles.container} flex gap-4 justify-center py-8 px-8 min-w-max`}
      >
        {model.map((item, idx) => (
          <React.Fragment key={item.hashId}>
            {idx !== 0 && (
              <div
                className={`${styles.separator} border-r border-1`}
                role="separator"
              ></div>
            )}
            <a href={`#${item.hashId}`}>{item.title}</a>
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
}

export default MiniMenu;
