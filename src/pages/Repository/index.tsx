import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronsLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo, IssuesList } from './styles';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  id: string;
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  title: string;
  id: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    async function loadData(): Promise<void> {
      const [repo, issue] = await Promise.all([
        api.get<Repository>(`/repos/${params.repository}`),
        api.get(`/repos/${params.repository}/issues`),
      ]);

      setRepository(repo.data);
      setIssues(issue.data);
    }

    loadData();
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logoImg} alt="Logo GitHub Explorer" />
        <Link to="/">
          <FiChevronsLeft size={18} />
          <p>Voltar</p>
        </Link>
      </Header>
      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <p>Stars</p>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <p>Forks</p>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <p>Issues</p>
            </li>
          </ul>
        </RepositoryInfo>
      )}
      <IssuesList>
        {issues.map(issue => (
          <a key={issue.id} href={issue.html_url} target="blank">
            <div>
              <strong>{issue.user.login}</strong>
              <p>{issue.title}</p>
            </div>
            <FiChevronRight size={23} />
          </a>
        ))}
      </IssuesList>
    </>
  );
};

export default Repository;
