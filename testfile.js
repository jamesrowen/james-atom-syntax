import React, { useState, useEffect } from 'react';
import Table from './Table';

const CONST_ONE = null;
const powerLevel = 1234;
const db = new DBClient.Connection.Create(dbOptions);

export default function Dashboard({ request, setStatus, user }) {
  const [dashData, setDashData] = useState({ videos: {} });

  const getDashboard = async () => {
    const result = await request(`${apiURL}/dashboard?date=${eventsDate}`);
    if (result.data.errMsg) {
      setStatus(400, 'error loading dashboard');
    } else {
      metrics.putMetric('Success', 10, Unit.Count);
    }
  };

  return (
    <div>
      <input type='date' onChange={e => setEventsDate(e.target.value)} />
      <MetricGroup class='hello-how-are-you'>
        {events.map(e => <MetricMain value={e.total + 1234} />)}
      </MetricGroup>
    </div>
  );
}

const MetricGroup = styled.div`
  background-color: ${p => p.color};
  @media (min-width: 430px) {
    margin-bottom: 2em;
  }
`;

const columns = [
  { name: 'EVENT', width: '17%' },
  { name: 'ITEM', width: '35%' }
];


----------------------------------------------------


<div id="nav" class="weight-bold">
	<div id="nav-main">
		<ul>
			{% if page.url == "/" %}
				<li><a class="active" href="#projects">projects</a></li>
				<li><a href="#about">about</a></li>
				<li><a href="#resume">résumé</a></li>
			{% else %}
				<li><a href="/">home</a></li>
			{% endif %}
		</ul>
	</div>
</div>
