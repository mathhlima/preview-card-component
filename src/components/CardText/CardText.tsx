import styles from './styles.module.scss';
import Image from 'next/image';


export function CardText() {
    return (
        <>
            <div className={styles.card}>

                <div className={styles.cardLeft}>
                    <div className={styles.mainHeading}>
                        <p>Get <span>insights</span> that help your business grow.</p>
                    </div>

                    <div className={styles.secondHeading}>
                        <p>Discover that benefits of data analyts and make
                            better decisions regarding renevue, customer,
                            experience, and overall efficiency.
                        </p>
                    </div>

                    <div className={styles.numbers}>
                    <p>10k<br></br>
                        <span>COMPANIES</span>
                    </p><p>314
                        <span>TEMPLATES</span>
                    </p><p>12M
                        <span>QUERIES</span>
                    </p>
                    </div>

                    
                </div>

                <div className={styles.cardRight}>
                    <Image 
                        src="/image-header-desktop.jpg"
                        alt="Img Header"
                        width={500}
                        height={400}
                    />

                </div>


            </div>

        </>

    )
}