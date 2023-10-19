import styles from './MyWork.module.css';


import React from 'react'

export default function MyWork() {
  return (
    <section className={styles.MyWork} id='work'>
      {/* <div className={styles.mywork_pad}> */}

      <h2 className={styles.MywrokTitle}>My Potfolio</h2>
      <span className={styles.wrokDisc}>I take a pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am exited to bring my skills and experience to help businesses achive their goals and create a strong online presence.</span>
      {/* </div> */}
      <div className={styles.MyWorkContact_Container}>

      
        <div className={styles.MyWorkContact}>
            <div className={styles.MyWorkContact_items}>
                <div className={styles.outer}>
                    <img src="/my-Potfolio/assets/port_item-1.jpg" alt="Image" />
                </div>
                <div className={styles.inner}>
                  <div className={styles.port_btn}>
                    <a className={styles.port_search} href="#/"></a>
                    <a className={styles.port_link} href="#/"></a>
                  </div>
                  <div className={styles.port_text}>
                    <h4>BRANaDING DESIGN</h4>
                    <p>LOGO DESIGN</p>
                  </div>
                </div>
            </div>
            <div className={styles.MyWorkContact_items}>
                <div className={styles.outer}>
                    <img src="/my-Potfolio/assets/port_item-2.jpg" alt="Image" />
                </div>
                <div className={styles.inner}>
                  <div className={styles.port_btn}>
                    <a className={styles.port_search} href="#/"></a>
                    <a className={styles.port_link} href="#/"></a>
                  </div>
                  <div className={styles.port_text}>
                    <h4>BRANaDING DESIGN</h4>
                    <p>LOGO DESIGN</p>
                  </div>
                </div>
            </div>
            <div className={styles.MyWorkContact_items}>
                <div className={styles.outer}>
                    <img src="/my-Potfolio/assets/port_item-3.jpg" alt="Image" />
                </div>
                <div className={styles.inner}>
                  <div className={styles.port_btn}>
                    <a className={styles.port_search} href="#/"></a>
                    <a className={styles.port_link} href="#/"></a>
                  </div>
                  <div className={styles.port_text}>
                    <h4>BRANaDING DESIGN</h4>
                    <p>LOGO DESIGN</p>
                  </div>
                </div>
            </div>
            <div className={styles.MyWorkContact_items}>
                <div className={styles.outer}>
                    <img src="/my-Potfolio/assets/port_item-4.jpg" alt="Image" />
                </div>
                <div className={styles.inner}>
                  <div className={styles.port_btn}>
                    <a className={styles.port_search} href="#/"></a>
                    <a className={styles.port_link} href="#/"></a>
                  </div>
                  <div className={styles.port_text}>
                    <h4>BRANaDING DESIGN</h4>
                    <p>LOGO DESIGN</p>
                  </div>
                </div>
            </div>
            <div className={styles.MyWorkContact_items}>
                <div className={styles.outer}>
                    <img src="/my-Potfolio/assets/port_item-5.jpg" alt="Image" />
                </div>
                <div className={styles.inner}>
                  <div className={styles.port_btn}>
                    <a className={styles.port_search} href="#/"></a>
                    <a className={styles.port_link} href="#/"></a>
                  </div>
                  <div className={styles.port_text}>
                    <h4>BRANaDING DESIGN</h4>
                    <p>LOGO DESIGN</p>
                  </div>
                </div>
            </div>
            <div className={styles.MyWorkContact_items}>
                <div className={styles.outer}>
                    <img src="/my-Potfolio/assets/port_item-6.jpg" alt="Image" />
                </div>
                <div className={styles.inner}>
                  <div className={styles.port_btn}>
                    <a className={styles.port_search} href="#/"></a>
                    <a className={styles.port_link} href="#/"></a>
                  </div>
                  <div className={styles.port_text}>
                    <h4>BRANaDING DESIGN</h4>
                    <p>LOGO DESIGN</p>
                  </div>
                </div>
            </div>

        </div>
        </div>

    </section>
  )
}
