import { DeploymentTable } from '@/components/deployment-table/DeploymentTable';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <DeploymentTable />
    </main>
  );
}
