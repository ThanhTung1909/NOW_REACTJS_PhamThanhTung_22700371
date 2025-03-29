import React from "react";
import "../../pages/Labs02/main.css";

function Filter() {
  return (
    <div className="flex flex-col border-2 border-gray-300 rounded-xl 
    w-[350px] h-[870px]">
      <div className="title">
        <img
          src="/public/images/list_filter.png"
          alt=""
          style={{ width: "40px" }}
        />
        <span>FILTERS</span>
      </div>
      <h3 className="text-left ml-5" >Type</h3>
      <div className="flex grid-cols-2 justify-center items-center 
      pl-5 w-full">
        <div className="checkbox ">
          {/* <img src="/public/images/checkboxpink.png" alt="" /> */}
          <div>
            <input type="checkbox" name="check-box" />
            <span>Pan-fried</span>
          </div>
          <div>
            <input type="checkbox" name="check-box" checked />
            <span>Grilled</span>
          </div>
          <div>
            <input type="checkbox" name="check-box" />
            <span>Sauteed</span>
          </div>
          <div>
            <input type="checkbox" name="check-box" />
            <span>Steamed</span>
          </div>
        </div>
        <div className="checkbox">
          {/* <img src="/public/images/checkboxpink.png" alt="" /> */}
          <div>
            <input type="checkbox" name="check-box" />
            <span>Stir-fried</span>
          </div>
          <div>
            <input type="checkbox" name="check-box" checked />
            <span>Roasted</span>
          </div>
          <div>
            <input type="checkbox" name="check-box" />
            <span>Baked</span>
          </div>
          <div>
            <input type="checkbox" name="check-box" />
            <span>Stewed</span>
          </div>
        </div>
      </div>
      <div className="time">
        <h3>Time</h3>
        <div>
          <div>
            <span style={{ marginRight: "20px" }}>30 minutes</span>
            <span>50 minutes</span>
          </div>
          <img src="/public/images/slider.png" alt="" />
        </div>
      </div>
      <div className="rating">
        <h3>Rating</h3>
        <div className="start">
          <div className="checkbox">
            <div>
              <input type="checkbox" name="" id="" />
              <img src="/public/images/rating_5.png" alt="" />
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <img src="/public/images/rating_4.png" alt="" />
            </div>
            <div>
              <input type="checkbox" checked name="" id="" />
              <img src="/public/images/rating_3.png" alt="" />
            </div>
            <div>
              <input type="checkbox" checked name="" id="" />
              <img src="/public/images/rating_2.png" alt="" />
            </div>
            <div>
              <input type="checkbox" checked name="" id="" />
              <img src="/public/images/rating_1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="btn-apply">
        <button>Apply</button>
      </div>
    </div>
  );
}

export default Filter;
