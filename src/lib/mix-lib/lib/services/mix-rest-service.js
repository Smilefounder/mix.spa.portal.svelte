import { Api } from '../infrastructure/axios/api';
export class MixRestService extends Api {
    constructor(appUrl, modelName, viewName, specificulture, config) {
        super(config);
        this.instance.defaults.baseURL = appUrl;
        this.modelUrl = `${modelName}/${viewName}`;
        if (specificulture) {
            this.modelUrl = `${specificulture}/${modelName}/${viewName}`;
        }
    }
    getSingleModel(id, queries) {
        this.instance.defaults.params = queries;
        return this.get(`${this.modelUrl}/${id}`);
    }
    getDefaultModel(queries) {
        this.instance.defaults.params = queries;
        return this.get(`default`);
    }
    getListModel(queries) {
        this.instance.defaults.params = queries;
        return this.get(this.modelUrl);
    }
    createModel(model) {
        return this.post(this.modelUrl, model);
    }
    updateModel(id, model) {
        return this.put(`${this.modelUrl}${id}`, model);
    }
    updateFields(id, fields) {
        return this.patch(`${this.modelUrl}/${id}`, fields);
    }
    deleteModel(id) {
        return this.delete(`${id}`);
    }
    duplicateModel(id, queries) {
        this.instance.defaults.params = queries;
        return this.get(`${this.modelUrl}/duplicate/${id}`);
    }
    exportListModel(queries) {
        this.instance.defaults.params = queries;
        return this.get('${this.modelUrl}/export');
    }
    clearCache(id) {
        return this.get(`${this.modelUrl}/remove-cache/${id}`);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWl4LXJlc3Qtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL21peC5saWIudHMvc3JjL2xpYi9zZXJ2aWNlcy9taXgtcmVzdC1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNsRCxNQUFNLE9BQU8sY0FBa0IsU0FBUSxHQUFHO0lBRXhDLFlBQ0UsTUFBYyxFQUNkLFNBQWlCLEVBQ2pCLFFBQWdCLEVBQ2hCLGNBQXVCLEVBQ3ZCLE1BQTJCO1FBRTNCLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLFNBQVMsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUMzQyxJQUFJLGNBQWMsRUFBRTtZQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsY0FBYyxJQUFJLFNBQVMsSUFBSSxRQUFRLEVBQUUsQ0FBQztTQUM5RDtJQUNILENBQUM7SUFFTSxjQUFjLENBQUMsRUFBTyxFQUFFLE9BQWE7UUFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUN4QyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVNLGVBQWUsQ0FBQyxPQUFhO1FBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDeEMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFTSxZQUFZLENBQUMsT0FBc0I7UUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUN4QyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTSxXQUFXLENBQUMsS0FBUTtRQUN6QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU0sV0FBVyxDQUFDLEVBQU8sRUFBRSxLQUFRO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVNLFlBQVksQ0FBQyxFQUFPLEVBQUUsTUFBVztRQUN0QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFTSxXQUFXLENBQUMsRUFBTztRQUN4QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTSxjQUFjLENBQUMsRUFBTyxFQUFFLE9BQWE7UUFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUN4QyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVNLGVBQWUsQ0FBQyxPQUFhO1FBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDeEMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVNLFVBQVUsQ0FBQyxFQUFRO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Q0FDRiJ9