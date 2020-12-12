import React from 'react';
import Card from './Card';
import ImageUpload from './Profile/ImageUpload';

const CardList = ({ UserImages }) => {
    return (
        <div>
            <div className="tc dib br3 pa3 ma2 bw2 w-90 " >
                <div className="bt bb b--black-10">
                    <a className="db pv4 ph3 ph0-l no-underline black " href="#0">
                        <div className="flex flex-column flex-row-ns">
                            <ImageUpload />
                            <div className="w-100 w-60-ns pl3-ns" >
                                <label>Name</label>
                                <input
                                    className="pa2 ba w-100"
                                    placeholder="group name"
                                    type="text"
                                    name="group-name"
                                    id="name"
                                />
                                <label>Description</label>
                                <input
                                    className="pa2 ba w-100"
                                    placeholder="group description"
                                    type="text"
                                    name="Description"
                                    id="description"
                                />
                            </div>
                        </div>
                    </a>
                </div>

                <div className="cf pa2" style={{ display: 'flex', justifyContent: 'space-evenly' }}>

                    {
                        UserImages.map((user, i) => {
                            return (
                                <Card
                                    key={i}
                                    id={UserImages[i].id}
                                    image={UserImages[i].Image}
                                    name={UserImages[i].name}
                                />
                            );
                        })
                    }
                </div>

                <div className='mt4' style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <button className='b pa2 grow pointer hover-white w-40 bg-light-blue b--black-20'
                    >Update</button>
                    <button className='b pa2 grow pointer hover-white w-40 bg-light-red b--black-20'
                    >Remove</button>
                </div>
            </div>

        </div>
    );
}

export default CardList;