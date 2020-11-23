import React, { useState, FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories, Error } from './styles';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

interface Repository {
  id: string;
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const repos = localStorage.getItem('@GitHubExplorer/repositories');

    if (repos) {
      return JSON.parse(repos);
    }
    return [];
  });
  const [newRepo, setNewRepo] = useState('');
  const [errorMesage, setErrorMesage] = useState('');

  useEffect(() => {
    localStorage.setItem(
      '@GitHubExplorer/repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setErrorMesage(
        'Sorry, but you need informe a user/repository name to continue',
      );
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);
      const newRepository = response.data;
      setRepositories([...repositories, newRepository]);
      setNewRepo('');
      setErrorMesage('');
    } catch (error) {
      setErrorMesage('We don´t find this repository name');
    }
  }

  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositories on GitHub</Title>
      <Form hasError={!!errorMesage} onSubmit={handleAddRepository}>
        <input
          type="text"
          placeholder="Write here"
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>
      {!!errorMesage && <Error>{errorMesage}</Error>}

      <Repositories>
        {repositories.map(repository => (
          <Link key={repository.id} to={`/repository/${repository.full_name}`}>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={23} />
          </Link>
        ))}
        {/* <map key={repositories.id} name="" /> */}
      </Repositories>
    </>
  );
};

export default Dashboard;
