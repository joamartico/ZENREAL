import { useState } from "react";
import styled from "styled-components";
import IonSearchbar from "../components/IonSearchbar";

export default function Home() {
	const [search, setSearch] = useState("");

	return (
		<>
			<ion-header translucent>
				<ion-toolbar>
					<ion-title>ZENREAL</ion-title>

					<ion-buttons slot="end">
						<ion-button>Order By</ion-button>
					</ion-buttons>
				</ion-toolbar>
			</ion-header>

			<ion-content fullscreen>
				<ion-header collapse="condense" translucent>
					<ion-toolbar>
						<ion-title size="large">ZENREAL</ion-title>
					</ion-toolbar>
					<ion-toolbar>
						<IonSearchbar
							value={search}
							onChange={(e) => setSearch(e.detail.value)}
							placeholder="Search Food"
							animated
							show-cancel-button="focus"
						/>
					</ion-toolbar>
				</ion-header>
			</ion-content>
		</>
	);
}
