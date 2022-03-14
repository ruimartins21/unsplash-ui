import ReactDOM from "react-dom";
import type { FC } from "react";
import { useEffect } from "react";
import { CSSTransition } from "react-transition-group";

import "./styles.scss";

import { Photo } from "../../types";
import Favorite from "../favorite";
import user from "../../assets/user.svg";
import close from "../../assets/close.svg";
import FooterItem from "./components/footerItem";

type Props = {
  data: Photo;
  show: boolean;
  onClose: () => void;
};

const Modal: FC<Props> = ({ data, show, onClose }) => {
  const domNode = document.getElementById("root") as HTMLElement;

  const closeOnEscapeKeyDown = (e: KeyboardEvent) => {
    if ((e.code || e.key) === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);

    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return ReactDOM.createPortal(
    <CSSTransition
      in={show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
      classNames={{ enterDone: "modal__enter-done" }}
    >
      <div className="modal" onClick={onClose} aria-hidden="true">
        <div
          className="modal__content"
          onClick={(e) => e.stopPropagation()}
          aria-hidden="true"
        >
          <div className="modal__body">
            <div className="modal__left-side">
              <img src={data?.urls?.regular} alt="img1" />
            </div>
            <div className="modal__right-side">
              <div className="wrap">
                <div className="actions">
                  {data && data.favorite != null && (
                    <div className="favorite-btn">
                      <Favorite item={data} visible />
                    </div>
                  )}

                  <button type="button" className="close" onClick={onClose}>
                    <img src={close} alt="Close" />
                  </button>
                </div>

                <div className="header">
                  <h1>{data?.description ? data?.description : ""}</h1>
                  <div className="user-info">
                    <div className="user-avatar">
                      <img
                        className={
                          data?.user.profile_image.small ? "photo" : ""
                        }
                        src={
                          data?.user.profile_image.small
                            ? data?.user.profile_image.small
                            : user
                        }
                        alt="User Avatar"
                      />
                    </div>
                    <h3>
                      {data?.user.first_name} {data?.user.last_name}
                    </h3>
                  </div>
                </div>
                <div className="footer">
                  <FooterItem label="Camera make" value={data?.exif?.make} />
                  <FooterItem label="Camera model" value={data?.exif?.model} />
                  <FooterItem
                    label="Focal length"
                    value={data?.exif?.focal_length}
                  />
                  <FooterItem label="Aperture" value={data?.exif?.aperture} />
                  <FooterItem
                    label="Shutter speed"
                    value={data?.exif?.exposure_time}
                  />
                  <FooterItem label="ISO" value={data?.exif?.iso} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>,
    domNode
  );
};

export default Modal;
