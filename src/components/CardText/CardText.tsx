import styles from './styles.module.scss';
import Image from 'next/image';


export function CardText() {
    return (
        <>
            <div className={styles.card}>

                <div className={styles.cardLeft}>
                    <div className={styles.mainHeading}>
                        <p>Get insights that help your business grow.</p>
                    </div>

                    <div className={styles.secondHeading}>
                        <p>Discover that benefits of data analyts and make
                            better decisions regarding renevue, customer,
                            experience, and overall efficiency.
                        </p>
                    </div>

                    <p>10k
                        COMPANIES
                    </p><p>314
                        TEMPLATES
                    </p><p>12M
                        QUERIES
                    </p>
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